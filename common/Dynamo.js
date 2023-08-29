const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
  async get(ID, TableName) {
    const params = {
      TableName,
      Key: {
        ID,
      },
    };

    const data = await documentClient.get(params).promise();

    if (!data || !data.Item) {
      throw Error(
        `There was an error fetching the row for ID '${ID}' from table '${TableName}'`
      );
    }
    console.log(data);

    return data.Item;
  },

  async write(data, TableName) {
    if (!data.ID) throw Error('new row data lacks the necessary ID key');
    const params = {
      TableName,
      Item: data,
    };
    const res = await documentClient.put(params).promise();
    if (!res)
      throw Error(
        `There was an error inserting the row for ID '${ID}' into table '${TableName}'`
      );
    return data;
  },

  update: async ({
    TableName,
    primaryKey,
    primaryKeyValue,
    updateKey,
    updateValue,
  }) => {
    const params = {
      TableName,
      Key: { [primaryKey]: primaryKeyValue },
      UpdateExpression: `set ${updateKey} = :updateValue`,
      ExpressionAttributeValues: { ':updateValue': updateValue },
    };
    return documentClient.update(params).promise();
  },
  //TODO: determine if this function is needed for upcoming features
  query: async ({ TableName, index, queryKey, queryValue }) => {
    const params = {
      TableName,
      IndexName: index,
      KeyConditionExpression: `${queryKey} = :hkey`,
      ExpressionAttributeValues: { ':hkey': queryValue },
    };
    const res = await documentClient.query(params).promise();
    return res.Items || [];
  },
};
module.exports = Dynamo;
