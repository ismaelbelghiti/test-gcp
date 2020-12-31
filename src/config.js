import convict from "convict";

const config = convict({
  listen: { 
    default: 8000, 
    env: "PORT", 
    format: Number 
  },
  env: {
    default: "local",
    format: ["production", "local", "dev", "beta", "test"],
    env: "NODE_ENV"
  },
});

config.validate({ allowed: "strict" });

export default config;
