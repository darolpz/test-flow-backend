# Developer Applicant Interview Test Backend
Examen de aplicacion para puesto de desarrollador backend por Dario López

# Instalación
Clonar el repositorio

	$ git clone https://github.com/DarioLp/test-flow-backend.git
Instalar dependencias con el comando npm install

	$ npm install

Por gusto personal elegi utilizar TypeScript como lenguaje de desarrollo. Por lo tanto, para poder correr el proyecto se debera traspilar a JavaScript utilizando el comando tsc dentro del directorio de proyecto

	$ tsc

Una vez realizado este paso se generara una carpeta llamada dist que sera la carpeta utilizada para ejecutar el proyecto. Por defecto el puerto en el que escuchara la aplicacion sera el puerto 3000.

	$ node dist/

utilizando pm2

	$ pm2 start dist/


# Testing
Se eligio utilizar las librerias Jest y Supertest para realizar el testing de la aplicacion:

	$ node run test

# Deploy
La aplicacion se encontrara temporalmente hosteada en una instancia EC2 de AWS para facilitar pruebas.
[Enlace a EC2](http://ec2-18-231-119-79.sa-east-1.compute.amazonaws.com/v1/location)


