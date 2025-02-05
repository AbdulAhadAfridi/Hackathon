"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      {/* Previous Button */}
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="flex items-center gap-1 px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105 disabled:opacity-50"
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>

      {/* Page Numbers with Animation */}
      <div className="flex gap-2 items-center">
        <AnimatePresence mode="wait">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <motion.div
                key={pageNumber}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant={currentPage === pageNumber ? "default" : "outline"}
                  onClick={() => onPageChange(pageNumber)}
                  className={`w-12 px-4 py-2 rounded-md transition-transform duration-300 ${
                    currentPage === pageNumber
                      ? "bg-[#FBEBB5] text-black hover:bg-yellow-200"
                      : "border border-gray-300 hover:bg-gray-100"
                  } hover:scale-105`}
                >
                  {pageNumber}
                </Button>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Display Current Page */}
        <span className="text-gray-700 font-medium px-2">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="flex items-center gap-1 px-4 py-2 rounded-md transition-transform duration-300 hover:scale-105 disabled:opacity-50"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
