FROM public.ecr.aws/lambda/nodejs:14

COPY . .

RUN npm install
RUN npm run build

CMD ["dist/lambda.handler"]