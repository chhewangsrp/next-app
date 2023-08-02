# Use an official OpenJDK base image
FROM openjdk:20-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the Spring Boot JAR file into the container
COPY target/api-0.0.1-SNAPSHOT.jar /app/api.jar

# Expose the port that the Spring Boot application listens on
EXPOSE 8080

# Set the entrypoint to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/api.jar"]