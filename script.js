const form = document.querySelector('form')
// inicialiando a biblioteca
const nlwSetup = new NLWSetup(form) //criando uum novo obj NLW setup e colocando aqui 


// carregamento dos dados 
const data = {
  program: ['01-01','01-02','01-03','01-04','01-05'],
  workOut: ['01-01','01-02','01-03','01-04','01-05'],
  run: ['01-01', '01-02', '01-03'],
  drikWater: ['01-01','01-02','01-03','01-04','01-05'],
  read: ['01-01','01-02','01-03','01-04','01-05'],
  sleep: ['01-01','01-02','01-03','01-04','01-05']
}
nlwSetup.setData(data)
nlwSetup.load()





















// sar depois ,'01-06','01-07','01-08','01-09','01-10','01-11','01-12','01-13','01-14','01-15','01-16','01-17','01-18','01-19','01-20','01-21','01-22','01-23','01-24','01-25','01-26','01-27','01-28','01-29','01-30', '01-31'