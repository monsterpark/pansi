import { Loader } from 'lucide-react';
import type { ReactNode } from 'react';

type LoadingProps = {
  isLoading: boolean;
  children?: ReactNode;
  text?: string;
  className?: string;
};

export default function Loading({
  isLoading = true,
  children,
  text = '加载中...',
  className = '',
}: LoadingProps) {
  return (
    <div className={`relative ${className}`}>
      {/* 子内容 */}
      {children && (
        <div className={isLoading ? 'opacity-40 pointer-events-none' : ''}>
          {children}
        </div>
      )}

      {/* 加载覆盖层 */}
      {isLoading && (
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
          <div className='flex flex-col items-center justify-center p-2 rounded-xl bg-background/80 backdrop-blur-sm shadow-lg border border-border'>
            {/* 旋转指示器 */}
            <Loader className='animate-spin' />

            {/* 加载文本 */}
            {text && (
              <p className={`mt-3 font-medium text-foreground`}>{text}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
