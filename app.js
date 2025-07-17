import express from "express";
import swaggerSpec from "./swagger.js";
import swaggerUi from "swagger-ui-express";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /api/prueba:
 *   get:
 *     summary: Get a message
 *     responses:
 *       200:
 *         description: A message
 */
app.get("/api/prueba", (req, res) => {
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})