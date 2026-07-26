import openai
from google import genai as google_genai
# import google.generativeai as genai
from groq import Groq
from django.conf import settings
import time

# API Keys setup
openai.api_key = settings.OPENAI_API_KEY
# genai.configure(api_key=settings.GEMINI_API_KEY)

def get_openai_response(prompt: str) -> dict:
    """GPT-4 se response lo"""
    try:
        start_time = time.time()
        
        client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            # model="gpt-4",
            messages=[{"role": "user", "content": prompt}]
        )
        
        end_time = time.time()
        
        return {
            "response": response.choices[0].message.content,
            "response_time": round(end_time - start_time, 2),
            "model": "GPT-4",
            "provider": "OpenAI"
        }
    except Exception as e:
        return {"error": str(e)}

def get_gemini_response(prompt: str) -> dict:
    try:
        start_time = time.time()
        
        client = google_genai.Client(api_key=settings.GEMINI_API_KEY)
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=prompt
        )
        
        end_time = time.time()
        
        return {
            "response": response.text,
            "response_time": round(end_time - start_time, 2),
            "model": "Gemini 2.0 Flash",
            "provider": "Google"
        }
    except Exception as e:
        return {"error": str(e)}
    
def get_groq_response(prompt: str) -> dict:
    try:
        start_time = time.time()
        
        client = Groq(api_key=settings.GROQ_API_KEY)
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": prompt}]
        )
        
        end_time = time.time()
        
        return {
            "response": response.choices[0].message.content,
            "response_time": round(end_time - start_time, 2),
            "model": "LLaMA 3.3 70B",
            "provider": "Groq"
        }
    except Exception as e:
        return {"error": str(e)}    
# def get_gemini_response(prompt: str) -> dict:
#     """Gemini se response lo"""
#     try:
#         start_time = time.time()
        
#         # model = genai.GenerativeModel('gemini-pro')
#         model = genai.GenerativeModel('gemini-1.5-flash')
#         response = model.generate_content(prompt)
        
#         end_time = time.time()
        
#         return {
#             "response": response.text,
#             "response_time": round(end_time - start_time, 2),
#             "model": "Gemini Pro",
#             "provider": "Google"
#         }
#     except Exception as e:
#         return {"error": str(e)}


def compare_llm_responses(prompt: str) -> dict:
    """Dono models ko call karo aur compare karo"""
    
    openai_result = get_openai_response(prompt)
    gemini_result = get_gemini_response(prompt)
    groq_result = get_groq_response(prompt) 
    
    return {
        "prompt": prompt,
        "results": {
            "openai": openai_result,
            "gemini": gemini_result,
            "groq": groq_result
        }
    }