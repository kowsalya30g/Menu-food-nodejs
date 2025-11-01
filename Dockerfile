FROM node:20.19.5
COPY ./package.json ./package.json
COPY ./src ./src
RUN npm dependency:go-offline -B
RUN npm package
FROM openjdk:8u171-jre-alpine
WORKDIR /nodeProject
COPY --from=node target/*.jar ./nodeProject/Menu-food-nodejs.jar
CMD ["java", "-jar", "./nodeProject/Menu-food-nodejs.jar"]