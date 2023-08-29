# MICROFRONTENDS
## Module Federation

### Run the project

The main project is mfe2 and mfe1 is the sub.<br/>
Run the sub at first
```
cd mfe1
npm i
npm i --save-dev webpack webpack-cli webpack-server html-webpack-plugin babel-loader webpack-dev-server
webpack serve
```

Then

```
cd mfe2
npm i
npm i --save-dev webpack webpack-cli webpack-server html-webpack-plugin babel-loader webpack-dev-server css-loader
webpack serve
```

* Or change the scripts in the **package.json** file in both projects

___

Took from the https://levelup.gitconnected.com/micro-frontends-step-by-step-using-react-webpack-5-and-module-federation-e4b9d840ec71
