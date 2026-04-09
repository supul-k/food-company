'use client';
import Button from '../ui/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisible = 5;
  
  let visiblePages = pages;
  if (totalPages > maxVisible) {
    const start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);
    visiblePages = pages.slice(start - 1, end);
  }

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1"
      >
        Previous
      </Button>
      
      {visiblePages[0] > 1 && (
        <>
          <Button
            variant="outline"
            onClick={() => onPageChange(1)}
            className="px-3 py-1"
          >
            1
          </Button>
          {visiblePages[0] > 2 && <span className="px-2">...</span>}
        </>
      )}
      
      {visiblePages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'primary' : 'outline'}
          onClick={() => onPageChange(page)}
          className="px-3 py-1"
        >
          {page}
        </Button>
      ))}
      
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && <span className="px-2">...</span>}
          <Button
            variant="outline"
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-1"
          >
            {totalPages}
          </Button>
        </>
      )}
      
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1"
      >
        Next
      </Button>
    </div>
  );
}