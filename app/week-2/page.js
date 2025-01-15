import Title from "./title.js";
export default function Page() {
    let a = 68;
    let b = 1;

    return (
        <main>
            <Title />
            <p>Web Dev 2 Week-2</p>
            <p>
                The sum of {a} and {b} is {a + b}.
            </p>
        </main>
    );
}