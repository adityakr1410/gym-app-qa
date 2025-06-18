// SuccessNotification.tsx
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';

interface SuccessNotificationProps {
  open: boolean;
  onClose: () => void;
  message?: string;
  autoHideDuration?: number;
}

const SuccessNotification: React.FC<SuccessNotificationProps> = ({
  open,
  onClose,
  message = 'The new workout has been scheduled successfully.',
  autoHideDuration = 5000,
}) => {
  const [isVisible, setIsVisible] = useState(open);

  // Handle visibility changes when 'open' prop changes
  useEffect(() => {
    setIsVisible(open);
  }, [open]);

  // Auto-hide functionality
  useEffect(() => {
    if (open && autoHideDuration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Call onClose after transition completes
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration, onClose]);

  // Handle close button click
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Call onClose after transition completes
  };

  return (
    <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: 'fixed',
          top: 24,
          left: '34.5%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          width: '90%',
          maxWidth: 410,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(154, 230, 32, 0.2)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            padding: 0.5,
            border: '1px solid rgb(104, 197, 34)',
            borderRadius: '4px',
          }}
        >
          <CheckCircleIcon
            sx={{
              color: '#7ac142',
              marginRight: 0,
              marginLeft: 1,
              marginBottom: 2.5,
              fontSize: 20,
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              sx={{ marginLeft: 1.5 }}
              variant="subtitle2"
              fontWeight="bold"
            >
              Success
            </Typography>
            <Typography
              sx={{ marginLeft: 1.5 }}
              variant="body2"
              color="text.secondary"
            >
              {message}
            </Typography>
          </Box>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            size="small"
            sx={{ color: '#999', marginBottom: 2.5 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Slide>
  );
};

export default SuccessNotification;
