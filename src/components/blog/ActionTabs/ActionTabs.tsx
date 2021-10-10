import React from 'react';
import { Container, ActionItemContainer } from './ActionTabs.style';

interface Action {
  Icon: React.ReactChild;
  action: Function;
  tooltip: string;
}

interface ActionTabProps {
  actionItems: Action[];
}

const ActionTabs: React.FC<ActionTabProps> = ({ actionItems }) => {
  return (
    <Container>
      {actionItems.map((actionItem, i) => (
        <ActionItemContainer
          key={i}
          onClick={(e) => {
            e.stopPropagation();
            actionItem.action();
          }}
          tooltip={actionItem.tooltip}
        >
          {actionItem.Icon}
        </ActionItemContainer>
      ))}
    </Container>
  );
};

export default ActionTabs;
