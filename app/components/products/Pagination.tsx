'use client';
import { useState, useEffect } from 'react';
import Button from '../ui/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVisiblePages = () => {
    const maxVisible = isMobile ? 3 : 5;
    
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 flex-wrap">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 sm:px-3 py-1 text-xs sm:text-sm"
      >
        Prev
      </Button>
      
      {visiblePages[0] > 1 && (
        <>
          <Button
            variant="outline"
            onClick={() => onPageChange(1)}
            className="px-2 sm:px-3 py-1 text-xs sm:text-sm"
          >
            1
          </Button>
          {visiblePages[0] > 2 && <span className="px-1 text-gray-500 text-xs sm:text-sm">...</span>}
        </>
      )}
      
      {visiblePages.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'primary' : 'outline'}
          onClick={() => onPageChange(page)}
          className="px-2 sm:px-3 py-1 text-xs sm:text-sm min-w-[32px] sm:min-w-[40px]"
        >
          {page}
        </Button>
      ))}
      
      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && <span className="px-1 text-gray-500 text-xs sm:text-sm">...</span>}
          <Button
            variant="outline"
            onClick={() => onPageChange(totalPages)}
            className="px-2 sm:px-3 py-1 text-xs sm:text-sm"
          >
            {totalPages}
          </Button>
        </>
      )}
      
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 sm:px-3 py-1 text-xs sm:text-sm"
      >
        Next
      </Button>
    </div>
  );
}