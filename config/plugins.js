module.exports = ({ env }) => {
  // console.log(`env('AWS_ACCESS_KEY_ID') => `, env('AWS_ACCESS_KEY_ID'))
  return {
    graphql: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
    upload: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: "eu-central-1",
        params: {
          Bucket: "lof-upload",
        },
      },
    },
  };
};
