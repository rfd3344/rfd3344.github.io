

import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import {
  Box,
  Typography,
  Accordion as AccordionMui,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';



import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Accordion({
  defaultExpandIndex,
  data = [], // [{ summary: 'summary', details: 'details' }]
  onChange = (index = 0) => { },
  ...rest
}) {


  const [expandIndex, setExpandIndex] = useState(defaultExpandIndex);

  useEffect(() => {
    setExpandIndex(defaultExpandIndex);
  }, [defaultExpandIndex]);

  const handleChange = (index = 0) => (e, isExpanded = false) => {
    setExpandIndex(isExpanded ? index : false);
    onChange(index);
  };

  return (
    <Box {...rest}>
      {data?.map((item, key = 0) => {
        if (!item) return null;
        return (
          <AccordionMui
            key={key}
            expanded={expandIndex === key}
            onChange={handleChange(key)}
            disableGutters

            {...item?.accordionProps}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
            >
              {_.isString(item.summary) && (
                <Typography fontWeight="bold">
                  {item.summary}
                </Typography>
              )}
              {!_.isString(item.summary) && item.summary}

            </AccordionSummary>
            <AccordionDetails >
              {item.details}
            </AccordionDetails>

          </AccordionMui>
        );
      })}


    </Box>
  );
}