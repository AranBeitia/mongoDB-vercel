module.exports = {
	paths: {
		'/users/info': {
			get: {
				security: [
					{
						ApiKeyAuth: [],
					},
				],
				tags: {
					Users: 'Get Users info',
				},
				description: 'Get users',
				operationId: 'getUsers',
				parameters: [],
				responses: {
					200: {
						description: 'Users were obtained',
						content: {
							'application/json': {
								schema: {
									$ref: '#/components/schemas/user',
								},
							},
						},
					},
				},
			},
		},
	},
}
