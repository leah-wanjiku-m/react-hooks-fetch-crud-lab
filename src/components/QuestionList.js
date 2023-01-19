import { useEffect,useState } from "react"
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [quiz, setQuiz] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuiz(data));
  }, []);
  function Delete(deletedItem){
    const updatedItems = quiz.filter((question) => question.id !== deletedItem.id);
  setQuiz(updatedItems);

  }
  const quizes=quiz.map((quez)=>{
   return <QuestionItem
    key={quez.id}
    question={quez}
    onDelete={Delete}
   />
  })

    return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{quizes}</ul>
    </section>
  );
}

export default QuestionList;
