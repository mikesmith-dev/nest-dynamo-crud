import { Injectable } from '@nestjs/common';
import { config, DynamoDB } from 'aws-sdk';

@Injectable()
export class DBCrudService {
	dynamoDB: DynamoDB.DocumentClient
	constructor() {
		let dynOpts: Object = {};
		if (process.env.REGION == 'localhost') {
			console.log('DBConnection : Local');
			dynOpts['region'] = process.env.REGION
			dynOpts['endpoint'] = process.env.DYNAMODB_ENDPOINT
		} else {
			console.log('DBConnection : Live');
			config.update({
				region: process.env.REGION,
				accessKeyId: process.env.AWS_ACCESS_KEY_ID,
				secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
			})
		}
		this.dynamoDB = new DynamoDB.DocumentClient(dynOpts);
	}

	async createOrUpdate(table: string, data = {}) {
		const params = {
			TableName: table,
			Item: data
		}

		try {
			await this.dynamoDB.put(params).promise()
			return { success: true }
		} catch (error) {
			return { success: false }
		}
	}

	async findAll(table: string, filterKey: string = '', filterVal = null) {
		const params = {
			TableName: table
		}
		if (filterKey.length > 0) {
			params['FilterExpression'] = filterKey + ' = :' + filterKey
			params['ExpressionAttributeValues'] = { [':' + filterKey]: parseInt(filterVal) }
		}
		try {
			const { Items = {} } = await this.dynamoDB.scan(params).promise()
			return { success: true, data: Items }
		} catch (error) {
			console.error('Read table failed: ', error);
			return { success: false, data: null }
		}
	}

	async findItem(table: string, value, key: string = 'id') {
		const params = {
			TableName: table,
			Key: {
				[key]: parseInt(value)
			}
		}
		try {
			const { Item = {} } = await this.dynamoDB.get(params).promise()
			return { success: true, data: Item }
		} catch (error) {
			console.error('Unable to find: ', error);
			return { success: false, data: null }
		}
	}

	async deleteItem(table: string, value, key = 'id') {
		const params = {
			TableName: table,
			Key: {
				[key]: parseInt(value)
			}
		}

		try {
			await this.dynamoDB.delete(params).promise()
			return { success: true }

		} catch (error) {
			return { success: false }
		}
	}
}