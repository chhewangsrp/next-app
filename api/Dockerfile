FROM python:3.12.1

ARG APPDIR=/portfolio/
WORKDIR ${APPDIR}

ENV PYTHONPATH ${APPDIR}
ENV PYTHONBUFFERED 1

EXPOSE 8080

RUN apt-get clean all && \
    apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get autoremove && \
    apt-get install --fix-missing -y sudo netcat-traditional zip unzip ca-certificates libsasl2-dev libldap2-dev

ADD requirements.txt requirements.dev.txt ${APPDIR}
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

COPY entrypoint.sh /entrypoint.sh
RUN chmod 777 /entrypoint.sh


ENTRYPOINT [ "/entrypoint.sh" ]