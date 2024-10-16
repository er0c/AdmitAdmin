import React, { useState } from 'react';
import NewGoal from '../app/components/body/NewGoal';
import css from "../app/css/goalcomponents.module.css";

function Goal() {
    const [refreshGoals, setRefreshGoals] = useState(false);
  
    // Function to toggle the refresh state
    const triggerGoalRefresh = () => {
      setRefreshGoals((prev) => !prev);
    };
  
    return (
      <div className="goal-container">
        {/* Pass refreshGoals and triggerGoalRefresh to NewGoal */}
        <NewGoal updateGoalCount={triggerGoalRefresh} refreshGoals={refreshGoals} />
      </div>
    );
}

export default Goal;