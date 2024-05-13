# Stage 1: Build dependencies and install Python packages
FROM python:3.12.1 AS builder

ARG APPDIR=/portfolio
WORKDIR ${APPDIR}

# Copy requirements files and install Python dependencies
COPY requirements.txt ${APPDIR}
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Copy entrypoint script and set permissions
COPY entrypoint.sh /entrypoint.sh

# Use sed to remove carriage return characters from entrypoint.sh
RUN sed -i 's/\r$//' /entrypoint.sh && \
    chmod +x /entrypoint.sh

# Stage 2: Final image
FROM python:3.12.1-slim

ARG APPDIR=/portfolio
WORKDIR ${APPDIR}

# Install gunicorn
RUN pip install gunicorn

# Install netcat
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    netcat-traditional \
    && rm -rf /var/lib/apt/lists/*

# Install libpq-dev for PostgreSQL client library
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy Python dependencies from the builder stage
COPY --from=builder /usr/local/lib/python3.12/site-packages/ /usr/local/lib/python3.12/site-packages/

# Copy entrypoint script from the builder stage
COPY --from=builder /entrypoint.sh /

# Set environment variables
ENV PYTHONPATH=${APPDIR} \
    PYTHONBUFFERED=1

# Expose port 8080
EXPOSE 8080

# Define entrypoint for the container
ENTRYPOINT ["/entrypoint.sh"]
