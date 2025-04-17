# backend/app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.text_splitter import CharacterTextSplitter
from langchain.document_loaders import PyPDFLoader
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

pdf_paths = ["../data/Refrigeration notes.pdf", "../data/IC Engines detailed notes.pdf"]

# Load and process PDF data
def load_docs():
    pages = []
    for path in pdf_paths:
        loader = PyPDFLoader(path)
        pages.extend(loader.load())
    return pages

docs = load_docs()
text_splitter = CharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
texts = text_splitter.split_documents(docs)

# Generate embeddings and build vector store
embeddings = OpenAIEmbeddings()
vectorstore = FAISS.from_documents(texts, embeddings)
chain = load_qa_chain(OpenAI(temperature=0), chain_type="stuff")

@app.route("/ask", methods=["POST"])
def ask():
    query = request.json.get("question")
    docs = vectorstore.similarity_search(query)
    answer = chain.run(input_documents=docs, question=query)
    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)
