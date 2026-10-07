FROM python:3.14.4-slim

ARG APPDIR=/portfolio
ARG UID=1000
ARG GID=1000

WORKDIR ${APPDIR}

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libpq5 \
        netcat-traditional \
    && rm -rf /var/lib/apt/lists/*

COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

ENV UV_PROJECT_ENVIRONMENT=/opt/venv \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONPATH=${APPDIR}

# Workspace metadata
COPY pyproject.toml uv.lock ./
COPY src/pyproject.toml src/pyproject.toml

# Install dependencies
RUN uv sync --frozen 

# Non-root user
RUN groupadd --gid ${GID} app && \
    useradd \
        --uid ${UID} \
        --gid ${GID} \
        --create-home \
        --shell /bin/bash \
        app

COPY entrypoint.sh /entrypoint.sh

RUN sed -i 's/\r$//' /entrypoint.sh && \
    chmod +x /entrypoint.sh && \
    chown app:app /entrypoint.sh

ENV PATH="/opt/venv/bin:${PATH}"

USER app

EXPOSE 8000 5678

ENTRYPOINT ["/entrypoint.sh"]

