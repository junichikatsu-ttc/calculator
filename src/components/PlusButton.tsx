import React from 'react';

interface Props {
  onClick: () => void;
  label: string;
  disabled?: boolean;
}

export const PlusButton: React.FunctionComponent<Props> = ({ onClick, label, disabled }: Props) =>{
  return (
    <button onClick={onClick} disabled={disabled} style={{height:'400%'}}>
      {label}
    </button>
  );
}
