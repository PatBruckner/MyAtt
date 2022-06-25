import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent implements OnInit {

  constructor() { }

  randomList:string[]=[];

  ngOnInit(): void {
  }

   appendToArray(word:string) {
    console.log("upload word: "+word);
    this.randomList.push(word);
    this.updateList(this.randomList);

    word = '';
  }

  updateList(wordsArr: string[]) {
    var list= document.getElementById('list');
    list!.innerHTML = "";
    for (var i =0; i < wordsArr.length; i++) {
      var word = wordsArr[i];
      var li = document.createElement('li');
      li.innerText = word;
      list!.appendChild(li);
    }
    console.log(wordsArr)
  }

  resultList(wordsArr: string[]) {
    var result= document.getElementById('result');
    result!.innerHTML = "";
    for (var i =0; i < wordsArr.length; i++) {
      var word = wordsArr[i];
      var li = document.createElement('li');
      li.innerText = word;
      result!.appendChild(li);
    }
    console.log(wordsArr)
  }

  shuffleArr(wordsArr: string[]){
    for(var i = 0; i < wordsArr.length; i++){
      var tempWord = wordsArr[i];
      var randomIndex = Math.floor(Math.random() * wordsArr.length)
      wordsArr[i] = wordsArr[randomIndex];
      wordsArr[randomIndex] = tempWord;
    }
  }
  shuffleList() {
    this.shuffleArr(this.randomList);
    var list = this.randomList;
    this.resultList(list);
  }
  clearList(){
    for(var i=0;i<this.randomList.length;i++){
      this.randomList[i]='';
    }
    var list= document.getElementById('list');
    list!.remove();
    var result= document.getElementById('result');
    result!.remove();
  
  }
}
