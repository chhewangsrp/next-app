# Use an official OpenJDK base image
FROM openjdk:20-jdk-slim

# Set the working directory inside the container
WORKDIR /portfolio


# Copy the Spring Boot application files to the container
COPY . .

# Set the active profile to "dev"
ENV SPRING_PROFILES_ACTIVE=dev

CMD ["./mvnw", "spring-boot:run"]