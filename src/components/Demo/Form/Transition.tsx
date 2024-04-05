import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './css/transition.css';
const Transition = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const removeItem = (itemName: string) => {
    setItems([...items.filter((_) => _ !== itemName)]);
  };

  return (
    <>
      <TransitionGroup>
        {items.map((_, index) => {
          return (
            <CSSTransition key={index} timeout={5000} classNames="item">
              <div>
                {_}
                <button onClick={() => removeItem(_)}>Remove</button>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
};

export default Transition;
