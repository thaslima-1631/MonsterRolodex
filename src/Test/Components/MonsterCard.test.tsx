import React from "react";
import MonsterCard from "../../components/card-list/MonsterCard";
import { render,screen } from "@testing-library/react";
test("Monster Card Rendering",()=>{
    const mockDetails = [
        {img:'', id: 1, name: 'Monster 1', email: 'monster1@example.com' },
        {img:'', id: 2, name: 'Monster 2', email: 'monster2@example.com' },
      ];
    
    render(<MonsterCard details={mockDetails}/>);
    const monsterElements = screen.getAllByRole('img');
    
  expect(monsterElements).toHaveLength(mockDetails.length);
  
  // Check if the details of each monster are displayed correctly
  mockDetails.forEach((monster) => {
    expect(screen.getByAltText(monster.name)).toBeInTheDocument();
    expect(screen.getByText(monster.name)).toBeInTheDocument();
    expect(screen.getByText(monster.email)).toBeInTheDocument();
  });
})


