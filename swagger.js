import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
      openapi: '3.0.0',          // Versión de OpenAPI
      info: {
        title: 'Mi API con Swagger',
        version: '1.0.0',
        description: 'Documentación generada con swagger-jsdoc',
      },
      servers: [
        { url: 'http://localhost:3000', description: 'Servidor local' }
      ],
    },
    // Aquí indicamos dónde buscar los comentarios JSDoc:
    apis: ['./app.js'],         
  };
  
  const swaggerSpec = swaggerJSDoc(options);
  export default swaggerSpec;