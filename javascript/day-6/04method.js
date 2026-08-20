const calculator = 
{
    add : function (a , b)
    {
        return a+b;
    },
    sub : function (a , b)
    {
        return a-b;
    },
    prod: function (a , b)
    {
        return a*b;
    },
    div : function (a , b)
    {
        return a/b;
    },
    modu : function (a , b)
    {
        return a%b;
    }
};

console.log(calculator.add(1,2));