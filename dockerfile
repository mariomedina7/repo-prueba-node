# --- Etapa de build ---  
FROM node:18-alpine AS build  
WORKDIR /app

# Copiamos package.json y package-lock.json para cachear dependencias  
COPY package*.json ./  
RUN npm ci --only=production

# Copiamos el resto del código  
COPY . .

# --- Etapa de runtime ---  
FROM node:18-alpine
WORKDIR /app

# Copiamos los node_modules y código desde build  
COPY --from=build /app/node_modules ./node_modules  
COPY --from=build /app ./

# Exponemos el puerto que usa la API  
EXPOSE 3000

# Comando de arranque  
CMD ["npm", "start"]
