'use strict' ;

class TodoItem {

    done = false ;

    constructor ( id , caption , description ) {
        this.id = id ,
        this.caption = caption ,
        this.description = description
    }

}

class TodoList {

    #_id = 1 ;
    #_items = [] ;

    add ( sCaption, sDescription ) {
        this.#_items.push( new TodoItem ( this.#_id++ , sCaption, sDescription ) ) ;
    } 

    completeAll () {
        this.#_items.forEach ( object => { object.done = true } ) ;
    }    

    //// метод для просмотра items, который нельзя менять извне
    view () {
        this.#_items.forEach ( object => { console.log( `id - ${object.id} , caption = ${object.caption} , description = ${object.description} , done - ${object.done}` ) }) ;
    }

}

const todoListObject = new TodoList() ;
todoListObject.add( 'caption1' , 'description1' ) ;
const test = new TodoItem ( 'test' , 'test' ) ;
todoListObject.add( 'caption2' , 'description2' ) ;
todoListObject.add( 'caption3' , 'description3' ) ;

todoListObject.view() ;
todoListObject.completeAll() ;
todoListObject.view() ;
