## 프로젝트 생성

## console
```bash
$ npm init -y
$ npm install -D parcel
```

## package.json
```javascript
{
  ...
  "scripts": {
    "dev": "parcel ./index.html", // dev
    "build": "parcel build ./index.html", // build
  },
  ...
  "devDependencies": {
    "parcel": "^2.8.2"
  }
}
```