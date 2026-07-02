import './FaqItem.scss';

interface FaqItemProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

export default function FaqItem({ question, answer, open, onToggle }: FaqItemProps) {
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <div className="faq-q" onClick={onToggle}>
        <span>{question}</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-a"><p>{answer}</p></div>
    </div>
  );
}
