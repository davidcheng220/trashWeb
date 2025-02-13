FROM python:3.10.11-slim

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

# CMD ["gunicorn", "-w", "4", "app:app" , "--bind", "0.0.0.0:5000", "--reload"]
CMD ["python", "app.py"]