import babel from 'rollup-plugin-babel'

const defaultConfig = {
  name: 'ULID',
  input: './lib/index.js',
}

const jsModuleConfig = Object.assign({}, defaultConfig, {
  output: {
    format: 'cjs',
    file: './dist/index.js'
  },
  plugins: [
    babel()
  ]
})

export default [
  jsModuleConfig
]
