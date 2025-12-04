"use strict"
{
    const r1 = /.a.o/gimuy;
    const r2  = new RegExp(".a.o", "i");
    const r3 = new RegExp(/.a.o/i);
    const r4 = new RegExp(/a.o/, "i");

    console.log(r1.source);
    console.log(r1.flags);
    r1.flags.includes("g")?console.log("yes g"):console.log("no g");
    r1.global?console.log("yes g"):console.log("no g");

    r1.flags.includes("i")?console.log("yes i"):console.log("no i");
    r1.ignoreCase?console.log("yes i"):console.log("no i");

    r1.flags.includes("m")?console.log("yes m"):console.log("no m");
    r1.multiline?console.log("yes m"):console.log("no m");

    r1.flags.includes("u")?console.log("yes u"):console.log("no u");
    r1.unicode?console.log("yes u"):console.log("no u");

    r1.flags.includes("y")?console.log("yes y"):console.log("no y");
    r1.sticky?console.log("yes y"):console.log("no y");

    /**
     * boolean regExpe.test (string);
     * [] regExp.exec (string)
     * [] str.match (regExp);
     */

    r4 = new RegExp(/a.o/, "i");
    r4.test("GATO");
    r4.test("pATo");
    r4.test("Perro");

    console.log("---------m-------");
    const regEx1 = new RegExp("^football");
    const regEx2 = new RegExp("^football", "m");

    console.log(regEx1.test("rugby\nfootball"));
    console.log(regEx2.test("rugby\nfootball"));
    console.log(regEx2.test("rugby\n kk football"));
    console.log(regEx2.test("football\ntenis"));

    console.log("---------u--------");

    r4 = /😎./u;
    console.log(r4.test('😎ba'));

    r4 = /./;
    console.log(r4.test("ab"));
    console.log(r4.test(" "));
    console.log(r4.test("x"));

    r4 = /^.$/;
    console.log(r4.test("XX\nZ"));
    

    console.log("--------------y-----------");
    const regExp3 = new RegExp("a", "y");
    regExp3.lastIndex = 0;
    console.log(regExp3.test("ba"));
    regExp3.lastIndex = 1;
    console.log(regExp3.test("ba"));
    regExp3.lastIndex = 2;
    console.log(regExp3.test("ba"));

    const regExp4 = /foot/y;
    let myStr1 = "table footballfootbolin";
    regExp4.lastIndex = 6;
    console.log(regExp4.test(myStr1));
    console.log(regExp4.test(myStr1));


    console.log("SPECIAL CHARACTERS");
    /**
     *  . -> CUALQUIER CARACTER
     *  \ -> ESCAPA CARACTERES
     *  \n -> salto de línea
     *  \t -> tabulador
     *  \r -> salto de carro
     *  \f -> fin de formulario
     */

    let regExp5 = /^.$/i;
    let regExp6 = /^\.$/i;
    console.log(regExp6.test("X"));

    /**
     *  \s -> espacio
     *  [] -> cualquier caracter del interior
     *  [^] -> no puede existir ningun caracter de ahi dentro
     *  | -> alternativa
     *  [a-z] -> cualquier letra minúscula (no letras acentuadas ni ñ)
     *  [A-Z] -> cualquier letra mayúscula (no letras acentuadas ni ñ)
     *  [0-9] \d -> números
     *  [^0-9] \D -> que no haya numeros
     *  [a-zA-Z] -> hay una letra
     *  [^a-zA-Z] -> no hay una letra
     *  [0-9a-zA-Z]  -> que haya carácter alfanumérico
     *  [^0-9a-zA-Z]  -> que no haya carácter alfanumérico
     *  [ ] -> un espacio
     *  [\t] -> tabulador
     *  [\r] -> un salto de carro
     *  [\n] -> un fin de formulario
     *  [ \t\r\n\f] = \s
     *  [^ \t\r\n\f] = \S
     *  \s
     *  \S
     *  \b -> un texto con espacios o símbolos de puntuación al principio o al final
     *  \B  -> lo contrario a \b
     *  * -> Un caracter que aparece 0 o mas veces
     *  + -> Un caracter que aparece 1 o mas veces
     *  ? -> El caracter anterior puede aparecer o no aparecer
     *  {n} -> el caracter anterior aparece n veces
     *  {n,} -> el caracter anterior aparece n o mas veces
     *  {n,m} -> el caracter anterior aparece entre n y m veces
     *  (x)
     *  (?:x)
     *  (?=y)
     *  x(?!y)
     *  g -> búsqueda global, que lo recorra todo.
     *  i -> Ignora mayúsculas
     *  ^ -> Es el principio
     *  $ -> Es el final
     */


    let RegExp28 = /\b[áéíóúa-z]\b/gi
    console.log(RegExp28.test())
    console.log(str.match())
    

}