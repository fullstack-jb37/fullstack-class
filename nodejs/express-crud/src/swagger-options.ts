import { Options } from 'swagger-jsdoc'

export const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger Tutorial',
            version: '1.0.0',
            description: 'We are about to study swagger'
        },
        servers: [
            {
                url: `http://localhost:${process.env.APP_PORT}`
            }
        ]
    },
    apis: ['./open-api.yaml', './app.ts']
}