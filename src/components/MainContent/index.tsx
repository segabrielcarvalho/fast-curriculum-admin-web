import { ReactNode } from 'react';

function MainContent({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white p-8 rounded-lg justify-center items-center mb-16 w-full max-w-full overflow-hidden box-border">
      {children}
    </div>
  );
}

export default MainContent;
