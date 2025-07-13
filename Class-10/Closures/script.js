
function createCounter(){
    let count=0;

    function increment(){
        count++;
        console.log(count);
    }

    function decrement(){
        count--;
        console.log(count);
    }

    return increment;
}

// xxx237422abc -> {count: 0}
const counter = createCounter();

// {count:0}
counter.increment(); //{count:1}
counter.increment(); //{count:2}
counter.increment(); //{count:3}
counter.increment(); //{count:4}
counter.increment(); //{count:5}

// {count: 0} 
// xhha1236 -> {count: 0}
const counter2 = createCounter();
counter2.increment(); //{count:1}

counter2.decrement(); //{count:0}