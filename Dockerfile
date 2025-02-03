# השתמש בתמונה בסיסית של Node.js
FROM node:14

# הגדרת ספריית העבודה
WORKDIR /usr/src/app

# העתק את קבצי package.json ו-package-lock.json
COPY package*.json ./

# התקנת התלויות
RUN npm install

# העתק את כל הקוד
COPY . .

# חשיפת הפורט שעליו האפליקציה תרוץ
EXPOSE 3000

# הפעלת האפליקציה
CMD ["node", "index.js"]
