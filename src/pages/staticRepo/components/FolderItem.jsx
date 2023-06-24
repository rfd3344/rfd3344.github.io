import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  SvgIcon
} from '@mui/material';


import {
  getResource,
} from 'src/api/gitStatic';
import {
  FolderIcon,
  FolderOpenIcon,
} from 'src/core/Icons';

import GitFolder from './GitFolder';


export default function FolderItem({
  parentPath = "/",
  path = '',
  type = '',
  url = '',
}) {

  const [isExpand, setIsExpand] = useState(false);
  const [subTree, setSubTree] = useState([]);

  const currentPath = parentPath + '/' + path;



  const handleExpend = () => {
    const nextExpend = !isExpand;

    if (nextExpend && _.isEmpty(subTree)) {
      getResource(url).then(resp => {
        setSubTree(resp.tree);
      });
    }

    setIsExpand(nextExpend);
  };


  return (
    <Accordion
      disableGutters
      expanded={isExpand}
      onChange={handleExpend}
    >
      <AccordionSummary>
        <Typography variant="subtitle2">
          <SvgIcon
            component={isExpand ? FolderOpenIcon : FolderIcon}
            color="primary"
            fontSize="small"
            sx={{ mr: 1 }}
          />
          {currentPath}
        </Typography>
      </AccordionSummary>
      <AccordionDetails >
        {!_.isEmpty(subTree) && (
          <GitFolder
            parentPath={currentPath}
            tree={subTree}
          />
        )}

      </AccordionDetails>
    </Accordion>
  );
}