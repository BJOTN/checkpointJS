class Wallet {
  #owner = '';
  #amount = 0;

  get owner(){
    return this.#owner;
  }
  get amount(){
    return this.#amount;
  }
  set owner(newOwner){
    this.#owner = newOwner
  }
  set amount(newAmount){
    if(newAmount >= 0){
      this.#amount = newAmount
    }
  }

  static async getFirstElement(){
    try {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      console.log(data)
      const firstData = data.results[0];
      console.log(firstData)
    } catch (error) {
      console.log(error)
    }
  }

  render(){
    
  }
}
Wallet.getFirstElement().then(()=>{
  const contenitore = document.createElement('div');
  contenitore.innerHTML = `name: ${data.results[0].name.first}`
  const body = document.querySelector('body');
  body.append(contenitore)
})


/* Creare una classe "Wallet" che sia costituita dalle proprietà private "owner" e "amount".Amount
deve essere inizializzato a zero e l'owner deve essere una stringa vuota. Per entrambe le proprietà
definire getter e setter corrispondenti.
Dichirare poi un metodo statico asincrono che effettua un fetch dal seguente url: "https://api.apininjas.
com / v1 / randomuser". Del risultato della promise ci interessa il primo elemento dell’array
results che va assegnato alla proprietà owner.
Crea un metodo render che attraverso la manipolazione del DOM gestisce la renderizzazione del
wallet in pagina.
  BONUS
Crea un input numerico per fare un versamento.L’input sarà visibile solo se esiste l’owner.Al
submit modifica l’amount(dopo aver fatto controlli vari sul valore inserito). */