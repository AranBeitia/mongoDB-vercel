module.exports = {
	components: {
		securitySchemes: {
			ApiKeyAuth: {
				type: 'apiKey',
				name: 'Authorization',
				in: 'header',
			},
		},
		schemas: {
			user: {
				type: 'object',
				properties: {
					_id: {
						type: 'objectId',
						description: 'user identification number',
						example: '6201064b0028de7866e2b2c4',
					},
					name: {
						type: 'string',
						description: 'user name',
						example: 'Jon Doe',
					},
					email: {
						type: 'string',
						description: 'user email',
						example: 'jon@doe.com',
					},
					password: {
						type: 'string',
						description: 'user password',
						example: '123456',
					},
					age: {
						type: 'number',
						description: 'user age',
						example: '32',
					},
					role: {
						type: 'string',
						description: 'user role',
						example: 'user',
					},
				},
			},
		},
	},
}
