FROM python:3.10

WORKDIR /app

COPY ./requirements.txt

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

#CMD ["gunicorn" ,"-b" ,"127.0.0.1:5000","app:app"]
CMD [ "flask" ,"run"]
