export const test = () => {
    console.log('test')
    // 9つの型
    // const name:string = 'Mike';
    // const age:number = 25;
    // const isStudent:boolean = false;
    // const hobbies:string[] = ['Reading', 'Snowboard', 'Gaming'];
    // const address:object = {
    //     street: '123 main St',
    //     city: 'LA',
    //     state: 'USA',
    // };
    // const today:Date = new Date();
    // const none: null = null;
    // const notDifined:undefined = undefined;
    // const random: any = 'hello'; // any
    // const gender: 'male' | 'female' = 'male'; // union
    // const value: string | number | null = 'hello'; // union

    ///////////////
    // const reverseArray = (arr: string[]): string[] => {
    //     const reversedArray: string[] = [];
    //     let index:number = arr.length - 1;
    //     while (index >= 0 ){
    //         reversedArray.push(arr[index]);
    //         index--;
    //     }
    //     //return arr.reverse();
    //     return reversedArray
    // }
    // console.log(reverseArray(['a', 'aa', 'aaa']));

    ////////////////////////////
    // interface UserProps {
    //     userId: number;
    //     name: string;
    //     age: number;
    //     email: string;
    //     isActive: boolean;
    // }

    // // 継承
    // interface AdminUser extends UserProps{
    //     role: string;
    // }

    // const createAccount = (accountInfo: AdminUser) => {
    //     //
    // }

    // createAccount({
    //     userId: 1,
    //     name: 'string',
    //     age: 27,
    //     email: 'string',
    //     isActive: true,
    //     role: 'god',
    // });

/////////////////////////////////////////
    // public, 外部からアクセスできる
    // static, インスタンスを持たないもの
    // private, クラス内からしかアクセス出来ない <= 基本
    // protected, サブクラスからはアクセスができる

/////////////////////////////////
// ジェネリクス
const foo = <T>(arg: T): T =>{
    return arg;
}

    console.log(foo<string>('helloジェネリクス')); 


// VSコードで飛ぶ cmd + click
// ChatGPTに変換してもらう
// エラーをよく読む
// 困ったらanyにする






}