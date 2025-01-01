# Stage 1: ビルドステージ
FROM node:16-alpine AS build

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# Stage 2: 本番ステージ
FROM nginx:stable-alpine

# Nginxの設定ファイルを削除
RUN rm -rf /usr/share/nginx/html/*

# ビルドされたファイルをNginxの公開ディレクトリにコピー
COPY --from=build /app/dist /usr/share/nginx/html

# カスタムNginx設定（オプション）
# COPY nginx.conf /etc/nginx/nginx.conf

# ポートを公開
EXPOSE 3000

# デフォルトのコマンドを実行
CMD ["nginx", "-g", "daemon off;"]
