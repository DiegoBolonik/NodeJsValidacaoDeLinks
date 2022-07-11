import pegaArquivo from '../index.js';

const ArrayResults = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function');
  })
  it('deve retornar array com resultados', async () => {
    const resultado = await pegaArquivo('/home/dcm/alura/lib-markdown/test/arquivos/texto1.md')
    expect(resultado).toEqual(ArrayResults)
  })
  it('deve retornar mensagem "não há links"', async () => {
    const resultado = await pegaArquivo('/home/dcm/alura/lib-markdown/test/arquivos/texto1_semlinks.md')
    expect(resultado).toBe('não há links');
  })
})
